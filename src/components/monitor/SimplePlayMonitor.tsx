import { useEffect, useState } from 'react';
import { Seat } from '../../utils/type';
import { fetchWithHandler } from '../../utils/fetchWithHandler';
import { getPlayMonitorData } from '../../apis/ticket';
import ProgressBar from '../common/ProgressBar';

interface SimplePlayMonitorProps {
  namespace: string;
  seatData: Seat[];
}

export default function SimplePlayMonitor({
  namespace,
  seatData,
}: SimplePlayMonitorProps) {
  const [totalSeatCount, setTotalSeatCount] = useState<number>(null);
  const [reservedSeatCount, setReservedSeatCount] = useState<number>(null);

  useEffect(() => {
    if (namespace) {
      fetchWithHandler(() => getPlayMonitorData(), {
        onSuccess: (response) => {
          setReservedSeatCount(response.data.tickets
            .filter((d) => d.namespace === namespace).length);
        },
        onError: () => {},
      });
    }
  }, [namespace]);

  useEffect(() => {
    if (seatData) {
      setTotalSeatCount(seatData.reduce((acc, cur) => acc + cur.count, 0));
    }
  }, [seatData]);

  if (reservedSeatCount === null && seatData) {
    return null;
  }

  return (
    <ProgressBar
      cur={reservedSeatCount}
      total={totalSeatCount}
    />
  );
}
