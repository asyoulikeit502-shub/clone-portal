window.selectedOrFirstAvailableVariant = '';
  const temp = `
  
`;
  const temp_2 = `
  
`;
  const temp_3 = `
  
`;
  const temp_4 = `
  
`

  window.productDetailsObject = temp.split("\n").map(i => i.replace(/ /g, '')).reduce((acc, str) => {
    if (str) {
      const [key, value] = str.split(":");
      acc[key] = value;
      return acc;
    }
    return acc;
  }, {});

  window.productInventoryObject = temp_2.split("\n").map(i => i.replace(/ /g, '')).reduce((acc, str) => {
    if (str) {
      const [key, value] = str.split(":");
      acc[key] = value;
      return acc;
    }
    return acc;
  }, {});

  window.productQtyObject = temp_3.split("\n").map(i => i.replace(/ /g, '')).reduce((acc, str) => {
    if (str) {
      const [key, value] = str.split(":");
      acc[key] = value;
      return acc;
    }
    return acc;
  }, {});
  
  window.productInventoryManagement = temp_4.split("\n").map(i => i.replace(/ /g, '')).reduce((acc, str) => {
    if (str) {
      const [key, value] = str.split(":");
      acc[key] = value;
      return acc;
    }
    return acc;
  }, {});