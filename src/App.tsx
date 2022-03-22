import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootStore, RootStoreProvider, setupRootStore } from "./models";
import { HelloWorld } from "./screens";

export default function App() {
  const [rootStore, setRootStore] = useState<RootStore | undefined>(undefined);
  // Kick off initial async loading actions, like loading fonts and RootStore
  useEffect(() => {
    (async () => {
      setupRootStore().then(setRootStore);
    })();
  }, []);

  // Before we show the app, we have to wait for our state to be ready.
  // In the meantime, don't render anything.
  // Todo: We can show, another page that says it's still loading
  if (!rootStore) return null;

  return (
    <RootStoreProvider value={rootStore}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HelloWorld />} />
        </Routes>
      </BrowserRouter>
    </RootStoreProvider>
  );
}
