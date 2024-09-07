import { ResponsiveLine } from '@nivo/line';
import styles from '../styles/Dashboard.module.css';

const data = [
  [1725687754, '0.109234512'],
  [1725687814, '0.129344512'],
  [1725687874, '0.123454512'],
  [1725687934, '0.109494512'],
  [1725687994, '0.109454512'],
  [1725688054, '0.209994512'],
  [1725688114, '0.103994512'],
  [1725688174, '0.149992352'],
  [1725688234, '0.179349452'],
];

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CPU 사용량</div>
      <ResponsiveLine
        data={
        [
          {
            id: 'cpu',
            data: data.map(([x, y]) => ({
              x: new Date(Number(x) * 1000),
              y: (Number(y) * 100).toFixed(2),
            })),
          },
        ]
}
        margin={{
          top: 32, right: 48, bottom: 32, left: 48,
        }}
        pointSize={8}
        useMesh
        xScale={{ type: 'point' }}
        xFormat={(value) => value.toLocaleString()}
        axisBottom={{
          tickPadding: 5,
          tickRotation: 0,
          format: (value: Date) => value.toLocaleTimeString(),
        }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 100,
        }}
        yFormat={(value) => `${value}%`}
        axisLeft={{
          tickPadding: 5,
          tickRotation: 0,
          format: (value) => `${value}%`,
        }}
        enableArea
        curve="monotoneX"
        theme={{
          text: {
            fontFamily: 'NotoSansKR',
          },
          tooltip: {
            container: {
              fontFamily: 'NotoSansKR',
            },
          },
        }}
      />
    </div>
  );
}
