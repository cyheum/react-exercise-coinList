import { useSelector } from "react-redux";
import { InitialData } from "modules/store.interface";

export const useGetStore = () => {
  const store = useSelector(
    ({ mainStore }: { mainStore: InitialData }) => mainStore
  );
  return store;
};

export const useGetBookMarkList = () => {
  const { bookMarkList } = useSelector(
    ({ mainStore }: { mainStore: InitialData }) => mainStore
  );
  return bookMarkList;
};

export const useGetCoinDetail = () => {
  const { coinDetail } = useSelector(
    ({ mainStore }: { mainStore: InitialData }) => mainStore
  );
  return coinDetail;
};

export const useGetOptions = () => {
  const { viewOption, currencyOption, countOption } = useSelector(
    ({ mainStore }: { mainStore: InitialData }) => mainStore
  );
  return {
    viewOption: viewOption,
    currencyOption: currencyOption,
    countOption: countOption,
  };
};

export const useGetPage = () => {
  const { dataLimitCount } = useSelector(
    ({ mainStore }: { mainStore: InitialData }) => mainStore
  );
  return dataLimitCount;
};
