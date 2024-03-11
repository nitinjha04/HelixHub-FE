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
  _id: string;
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
  parentName?: {
    first?: string;
    last?: string;
  };
  parentEmail?: string;
  parentPhone?: string;
  parentAddress?: string;
  university?: string;
  degreeStartDate?: string;
  degreeEndDate?: string;
  degree?: string;
  universityCity?: string;
  createdAt?: string;
  grade?: string;
}

export interface ErrorResponse {
  data: string; // Adjust the type according to your error response structure
}

export interface UpdateData extends UserData {
  name?: {
    first?: string;
    last?: string;
  };
  dob?: string;
  pob?: string;
  phone?: number;
  email?: string;
  address?: string;
  parentName?: {
    first?: string;
    last?: string;
  };
  parentEmail?: string;
  parentPhone?: string;
  parentAddress?: string;
  university?: string;
  degreeStartDate?: string;
  degreeEndDate?: string;
  degree?: string;
  universityCity?: string;
}
