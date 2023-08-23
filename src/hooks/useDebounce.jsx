import { useCallback, useState } from 'react';

import { debounce } from 'lodash';

import { DEBOUNCE_TIME } from '@/constants';

export function useDebounce(initSearch = '') {
  const [searchValues, setSearchValues] = useState(initSearch);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchDebounce = useCallback(
    debounce((search) => setSearchValues(search), DEBOUNCE_TIME),
    []
  );

  return { searchValues, searchDebounce, setSearchValues };
}
