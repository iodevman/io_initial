import React from 'react';
import { Control, FieldValues, useWatch } from 'react-hook-form';

type Props<TFieldValues extends FieldValues = FieldValues> = {
  control: Control<TFieldValues>;
};

const WatchForm = ({ control }: Props) => {
  const values = useWatch({
    control,
  });

  return (
    <div>
      <pre>{JSON.stringify(values, undefined, 2)}</pre>
    </div>
  );
};

export default WatchForm;
