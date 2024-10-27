import React from 'react';
import { Card } from '../components/ui/card';
import { VouchersReportData } from '../types';

interface VouchersReportCardProps {
  loadingVouchersReport: boolean;
  vouchersReportData?: VouchersReportData;
  lastUpdated: Date | null;
  counter: number;
  onRefresh: () => void;
}

const VouchersReportCard: React.FC<VouchersReportCardProps> = ({
  loadingVouchersReport,
  vouchersReportData,
  counter,
  onRefresh,
}) => (
  <Card className="p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
    <div className="text-lg font-semibold text-gray-700">Vales Emitidos</div>
    {loadingVouchersReport ? (
      <div className="text-3xl font-bold mt-2 text-blue-600">Cargando...</div>
    ) : (
      <div>
        <div className="text-3xl font-bold mt-2 text-blue-600">
          Total: {vouchersReportData?.vouchersReport.total || 0}
        </div>
        <div className="text-lg mt-1 text-green-500">
          Usados: {vouchersReportData?.vouchersReport.used || 0}
        </div>
        <div className="text-lg mt-1 text-red-500">
          Pendientes: {vouchersReportData?.vouchersReport.unused || 0}
        </div>
      </div>
    )}
    <div className="text-gray-500 mt-1">
      Actualizado hace {counter} segundos
    </div>
    <button
      onClick={onRefresh}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
    >
      Actualizar
    </button>
  </Card>
);

export default VouchersReportCard;
