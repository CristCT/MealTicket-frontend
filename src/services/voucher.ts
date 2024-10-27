import { gql } from '@apollo/client';

export const GET_VOUCHERS = gql`
  query GetVouchers {
    allVouchers {
      id
      user {
        username
        email
      }
      serviceType
      isUsed
      issuedAt
      usedAt
    }
  }
`;

export const GET_VOUCHERS_REPORT = gql`
  query GetVouchersReport {
    vouchersReport {
      total
      used
      unused
    }
  }
`;

export const CREATE_VOUCHER = gql`
  mutation CreateVoucher($userId: ID!, $serviceType: String!) {
    createVoucher(userId: $userId, serviceType: $serviceType) {
      id
      user {
        id
        username
      }
      serviceType
      isUsed
      issuedAt
    }
  }
`;

export const USE_VOUCHER = gql`
  mutation UseVoucher($voucherId: ID!) {
    useVoucher(voucherId: $voucherId) {
      id
      isUsed
      usedAt
    }
  }
`;
