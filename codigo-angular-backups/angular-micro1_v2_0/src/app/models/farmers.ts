export interface Farmers {
    items: ItemsEntity[];
    meta: Meta;
  }
  export interface ItemsEntity {
    uuid: string;
    createdAt: string;
    email: string;
    cpf: string;
    name: string;
    lastName: string;
    genderType: string;
    birthdate: string;
    zipcode: string;
    mobileNumber: string;
    stateAddress: string;
    cityAddress: string;
    districtAddress: string;
    address: string;
    numberAddress: number;
  }
  export interface Meta {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  }
  