import { useContext } from 'react';
import { FormContainer, InputWrapper, MinutesAmountInput, TaskInput } from './styles';
import { CyclesContext } from '../../../../context/CyclesContext';
import { useFormContext } from 'react-hook-form';

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <InputWrapper>
        <label htmlFor="task">I'm going to work on</label>

        <TaskInput
          id="task"
          list="task-suggestions"
          placeholder="Name your project"
          disabled={!!activeCycle}
          {...register('task')}
        />

        <datalist id="task-suggestions">
          <option value="Project 1" />
          <option value="Project 2" />
          <option value="Project 3" />
          <option value="Ananas" />
        </datalist>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="minutesAmount">For </label>
        <MinutesAmountInput
          type="number"
          id="minutesAmount"
          placeholder="00"
          step={5}
          min={5}
          max={60}
          disabled={!!activeCycle}
          {...register('minutesAmount', { valueAsNumber: true })}
        />
        <span>minutes.</span>
      </InputWrapper>
    </FormContainer>
  );
}
