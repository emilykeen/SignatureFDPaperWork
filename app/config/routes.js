var React = require("react");

var router = require("react-router");

var Route = router.Route;

var Router = router.Router;

var hashHistory = router.hashHistory;
var browserHistory = router.browserHistory;

var IndexRoute = router.IndexRoute;

var IndexLayout = require("../components/layouts/indexLayout");
var Login = require("../components/pages/Login");
var UpdatePwd = require("../components/pages/UpdatePwd");
var Admin = require("../components/pages/Admin");

var EmployeeLayout = require("../components/layouts/employeeLayout");
var Welcome = require("../components/forms/Welcome");
var SignatureFDEmployeeHandbook = require("../components/forms/SignatureFDEmployeeHandbook");
var PulseFitnessAgreement = require("../components/forms/PulseFitnessAgreement");
var kBeneficiaryDesignationForm = require("../components/forms/401kBeneficiaryDesignationForm");
var kDirectionofInvestmentForm = require("../components/forms/401kDirectionofInvestmentForm");
var kSalaryDeferralAgreement = require("../components/forms/401kSalaryDeferralAgreement");
var BenefitsGuideSigFD2017 = require("../components/forms/BenefitsGuideSigFD2017");
var CellNumberandFirmDirectoryInformationRequest = require("../components/forms/CellNumberandFirmDirectory-InformationRequest");
var DependantCareApplication = require("../components/forms/DependantCareApplication");
var DependantCareFacilityStatement2017 = require("../components/forms/DependantCareFacilityStatement2017");
var DependentCareAssistancePlan = require("../components/forms/DependentCareAssistancePlan");
var DirectDepositForm = require("../components/forms/DirectDepositForm");
var FormG4 = require("../components/forms/FormG4");
var FormW4 = require("../components/forms/FormW4");
var i9paperversion = require("../components/forms/i-9-paper-version");
var LazparkingcontractSignatureFD = require("../components/forms/Lazparkingcontract-SignatureFD");
var SignatureFDComputerNetworkPolicyHandbook = require("../components/forms/SignatureFDComputer&NetworkPolicyHandbook");
var SignatureFDInternetAccessPolicy = require("../components/forms/SignatureFDInternetAccessPolicy");
var SignatureFDReceiptAcknowledgementEmployeeHandbook = require("../components/forms/SignatureFDReceiptAcknowledgement-EmployeeHandbook");
var SignatureFDSexualandOtherUnlawfulHarassmentPolicy = require("../components/forms/SignatureFDSexualandOtherUnlawfulHarassmentPolicy");



module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={IndexLayout}>
      <Route path="auth/login" component={Login} />
      <Route path="employee/update/password" component={UpdatePwd} />
      <Route path="admin" component={Admin} />
    </Route>
    <Route path="employee" component={EmployeeLayout}>
      <Route path="Welcome" component={Welcome} />
      <Route path="PulseFitnessAgreement" component={PulseFitnessAgreement} />
      <Route path="SignatureFDEmployeeHandbook" component={SignatureFDEmployeeHandbook} />
      <Route path="401kBeneficiaryDesignationForm" component={kBeneficiaryDesignationForm} />
      <Route path="401kDirectionofInvestmentForm" component={kDirectionofInvestmentForm} />
      <Route path="401kSalaryDeferralAgreement" component={kSalaryDeferralAgreement} />
      <Route path="BenefitsGuideSigFD2017" component={BenefitsGuideSigFD2017} />
      <Route path="CellNumberandFirmDirectory-InformationRequest" component={CellNumberandFirmDirectoryInformationRequest} />
      <Route path="DependantCareApplication" component={DependantCareApplication} />
      <Route path="DependantCareFacilityStatement2017" component={DependantCareFacilityStatement2017} />
      <Route path="DependentCareAssistancePlan" component={DependentCareAssistancePlan} />
      <Route path="DirectDepositForm" component={DirectDepositForm} />
      <Route path="FormG4" component={FormG4} />
      <Route path="FormW4" component={FormW4} />
      <Route path="i-9-paper-version" component={i9paperversion} />
      <Route path="Lazparkingcontract-SignatureFD" component={LazparkingcontractSignatureFD} />
      <Route path="SignatureFDComputer&NetworkPolicyHandbook" component={SignatureFDComputerNetworkPolicyHandbook} />
      <Route path="SignatureFDInternetAccessPolicy" component={SignatureFDInternetAccessPolicy} />
      <Route path="SignatureFDReceiptAcknowledgement-EmployeeHandbook" component={SignatureFDReceiptAcknowledgementEmployeeHandbook} />
      <Route path="SignatureFDSexualandOtherUnlawfulHarassmentPolicy" component={SignatureFDSexualandOtherUnlawfulHarassmentPolicy} />
    </Route>
    
  </Router>
);

// <Route path="*" component={Not Found}/>