var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    LastName: {
        type: String
    },
    FirstName: {
        type: String,
        name: "hello"
    },
    Initials: {
        type: String
    },
    Nickname: {
        type: String
    },
    HomeAddress: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Zip: {
        type: Number
    },
    County: {
        type: String
    },
    HomeAddress2: {
        type: String
    },
    HomePhoneNumber: {
        type: String
    },
    CellPhoneNumber: {
        type: String
    },
    OfficePhoneNumber: {
        type: String
    },
    Birthday: {
        type: String
    },
    SpouseName: {
        type: String
    },
    Department: {
        type: String
    },
    Signature: {
        type: String
    },
    Date: {
        type: String
    },
    Employer: {
        type: String
    },
     SuiteAddress: {
        type: String
    },
    OfficePhone:{
        type: String
    },
    Gender: {
        type: String
    },
    GymAccessCard: {
        type: String
    },
    EmailAddress: {
        type: String
    },
    EmergancyContact: {
        type: String
    },
    EmergancyContactRelationshipAndContact: {
        type: String
    },
    SocailSecurityNumber: {
        type: String
    },
    MaritalStatus: {
        type: String
    },
    PrimaryBeneficiary: {
        type: String
    },
    ContingentBenficiary: {
        type: String
    },
    PlanTrustee: {
        type: String
    },
    TagNumber: {
        type: Number
    },
    CarState: {
        type: String
    },
    CarYear: {
        type: Number
    },
    CarColor: {
        type: String
    },
    CarMake: {
        type: String
    },
    CarModel: {
        type: String
    },
    EmployeeHandbook: {
        type: Boolean
    },
    EmployeeHandbookAcknowledgement: {
        type: Boolean
    },
    BenefitsGuide: {
        type: Boolean
    },
    FourZeroOneKBeneficiary: {
        type: Boolean
    },
    FourZeroOneKDirection: {
        type: Boolean
    },
    FourZeroOneKDefferal: {
        type: Boolean
    },
    FirmDirectory: {
        type: Boolean
    },
    DependentCareApplication: {
        type: Boolean
    },
    DependentCareStatment: {
        type: Boolean
    },
    DependentCareAssistancePlan: {
        type: Boolean
    },
    DirectDepositForm: {
        type: Boolean
    },
    G4Form: {
        type: Boolean
    },
    W4Form: {
        type: Boolean
    },
    I9Form: {
        type: Boolean
    },
    ParkingContract: {
        type: Boolean
    },
    Password: {
        type: String
    },
    isNewEmployee: {
        type: Boolean
    }
});

var User = mongoose.model("User", UserSchema);
module.exports = User;