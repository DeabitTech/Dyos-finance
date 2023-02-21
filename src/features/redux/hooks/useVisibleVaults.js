import { useState } from 'react';

const useVisibleVaults = (vaults, chunk) => {
  const [visibleCount, setVisibleCount] = useState(chunk);

  let visibleVaults = vaults.slice(0, visibleCount);

  const fetchVisibleVaults = () => {
    if (visibleCount >= vaults.length) return;

    // Concat visible pools with new chunk
    const newVaults = vaults.slice(visibleCount, visibleCount + chunk);
    visibleVaults = visibleVaults.concat(newVaults);
    setVisibleCount(visibleCount + chunk);
  };

  return { visibleVaults, fetchVisibleVaults };
};

export default useVisibleVaults;
