import { File } from "buffer";

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData extends LoginData {
  phone: number;
  userName: string;
  confirmPassword: string;
}

export interface UserData {
  //common
  _id?: string;
  name?: {
    first?: string;
    last?: string;
  };
  role?: string;
  dob?: string;
  pob?: string;
  phone?: number;
  email?: string;
  address?: string;
  createdAt?: string;
  profilePicture?: {
    url?: {
      type: String;
    };
    urlId?: {
      type: String;
    };
  };
  file?: File | null;
  //student
  parentName?: {
    first?: string;
    last?: string;
  };
  parentEmail?: string;
  parentPhone?: string;
  parentAddress?: string;
  grade?: string;
  //Teacher
  education?: [
    {
      degree?: string;
      degreeStartDate?: string;
      degreeEndDate?: string;
      university?: string;
      universityCity?: string;
    }
  ];
  subject?: string;
  about?: string;
  expertise?: string;
}

export interface Messages {
  message?: {
    text?: string;
  };
  sender?: string;
  receiver?: string;
  createdAt?: string;
  to?: string;
}

export interface ErrorResponse {
  data: string; // Adjust the type according to your error response structure
}

// export interface UpdateData extends UserData {
//   name?: {
//     first?: string;
//     last?: string;
//   };
//   dob?: string;
//   pob?: string;
//   phone?: number;
//   email?: string;
//   address?: string;
//   parentName?: {
//     first?: string;
//     last?: string;
//   };
//   parentEmail?: string;
//   parentPhone?: string;
//   parentAddress?: string;
//   university?: string;
//   degreeStartDate?: string;
//   degreeEndDate?: string;
//   degree?: string;
//   universityCity?: string;
// }
