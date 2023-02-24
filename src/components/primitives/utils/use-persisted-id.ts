import React from 'react';
import { nanoid } from 'nanoid';

const usePersistedId = (): string => {

    const [id] = React.useState(`safekkep_${nanoid(7)}`);
    return id;
};

export default usePersistedId;
