export interface Metric {
  name: string;
  values: [number, number][];
}

export interface ResponseData {
  metric: {
    pod: string;
  },
  values: [number, string][];
}
