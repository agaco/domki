
const getFetchedData = (state) => state.dataStore.data;
const getDataToBeDisplayed = (state) => state.dataStore.data;
const getSingleItemData = (state) => state.dataStore.singleItem;


export default {
  getFetchedData,
  getSingleItemData,
  getDataToBeDisplayed,
};
