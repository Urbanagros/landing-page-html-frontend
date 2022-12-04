export interface UserLoginResponse {
    uuid: string;
    statusType: string;
    email: string;
    physicalPersonLicenseItems?: (string)[] | null;
    accessToken: string;
    cpf: string;
    name: string;
    lastName: string;
    genderType: string;
    birthdate: string;
    createdAt: string;
    zipcode: string;
    mobileNumber: string;
    stateAddress: string;
    cityAddress: string;
    districtAddress: string;
    address: string;
    numberAddress: number;
  }
  