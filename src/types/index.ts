export interface UsersData {
  users: { id: string; username: string }[];
}

export interface VouchersReportData {
  vouchersReport: {
    total: number;
    used: number;
    unused: number;
  };
  allVouchers: {
    id: string;
    serviceType: string;
    user: { username: string };
    isUsed: boolean;
  }[];
}
