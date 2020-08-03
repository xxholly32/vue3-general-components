const demos = [
  {
    name: "HelloWorld",
  },
];

export default demos.map((demo) => {
  const name = demo.name;
  return {
    path: `${name.toLowerCase()}`,
    name: `demo-${name.toLowerCase()}`,
    component: () =>
      import(/* webpackChunkName: "group-foo" */ `../pages/demos/${name}.vue`),
    meta: {
      label: name,
    },
  };
});
