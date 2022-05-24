import * as React from 'react';
import SuperAdminMenu from './SuperAdminMenu';
import ComplianceOfficerMenu from './ComplianceOfficerMenu';
import MerchantAdminMenu from './MerchantAdminMenu';
import MerchantStaffMenu from './MerchantStaffMenu';

//Set the Role Checker here (place code here for database link)

//var role = 'SuperAdmin';
//var role = 'ComplianceOfficer';
var role = 'MerchantAdmin';
//var role = 'MerchantStaff';

const Menu = () => {
    if (role === 'SuperAdmin') { 
        return <SuperAdminMenu />;
    }
    else if (role === 'ComplianceOfficer') {
        return <ComplianceOfficerMenu />;
    }
    else if (role === 'MerchantAdmin') {
        return <MerchantAdminMenu />;
    }
    else if (role === 'MerchantStaff') {
        return <MerchantStaffMenu />;
    }    
    else return <div></div>;
}

export default Menu;