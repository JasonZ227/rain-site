interface filtersParams {
  label: string;
  value: string;
}

const filters: filtersParams[] = [
  {
    label: "全部",
    value: "all",
  },
  {
    label: "已完成",
    value: "done",
  },
  {
    label: "未完成",
    value: "todo",
  },
];

export { filters };
