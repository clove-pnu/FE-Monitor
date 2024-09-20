import { PointTooltipProps, ResponsiveLine } from '@nivo/line';
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
  [1725688294, '0.109234512'],
  [1725688354, '0.129344512'],
  [1725688414, '0.123454512'],
  [1725688474, '0.109494512'],
  [1725688534, '0.109454512'],
  [1725688594, '0.209994512'],
  [1725688654, '0.103994512'],
  [1725688714, '0.149992352'],
  [1725688774, '0.179349452'],
];

interface DashboardProps {
  title: string;
  pid: number;
}

function Tooltip({ point }: PointTooltipProps) {
  return (
    <div className={styles.tooltipContainer}>
      <div>{point.data.xFormatted}</div>
      <div>{point.data.yFormatted}</div>
    </div>
  );
}

export default function Dashboard({ title, pid }: DashboardProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <ResponsiveLine
        data={
        [
          {
            id: title,
            data: data.map(([x, y]) => {
              const date = new Date(Number(x) * 1000);
              return {
                x: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
                y: (Number(y) * 100).toFixed(2),
              };
            }),
          },
        ]
}
        margin={{
          top: 32, right: 64, bottom: 96, left: 96,
        }}
        pointSize={8}
        useMesh
        xScale={{ type: 'point' }}
        axisBottom={{
          tickPadding: 5,
          tickRotation: -30,
          tickValues: 5,
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
        areaOpacity={0.5}
        colors={['#567ace']}
        tooltip={Tooltip}
      />
    </div>
  );
}
