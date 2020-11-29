import { useSelector } from "react-redux";

export const useGetStore = () => {
  const store = useSelector(({ mainStore }: any) => mainStore);
  return store;
};

export const useGetPriceList = () => {
  const { priceList } = useSelector(({ mainStore }: any) => mainStore);
  return priceList;
};

export const useGetBookMarkList = () => {
  const { bookMark } = useSelector(({ mainStore }: any) => mainStore);
  return bookMark;
};

export const useGetCoinDetail = () => {
  const { coinDetail } = useSelector(({ mainStore }: any) => mainStore);
  return coinDetail;
};

export const useGetOptions = () => {
  const { viewOption, currencyOption, countOption } = useSelector(
    ({ mainStore }: any) => mainStore
  );
  return {
    viewOption: viewOption,
    currencyOption: currencyOption,
    countOption: countOption,
  };
};

export const useGetActiveSelectBox = () => {
  const { activeSelectBox } = useSelector(({ mainStore }: any) => mainStore);
  return activeSelectBox;
};
