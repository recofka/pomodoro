import { Play } from 'phosphor-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Insert a name for your task'),
  minutesAmount: zod
    .number()
    .min(5, 'The cycle needs to be at least 5 minutes.')
    .max(60, 'The cycle needs to be a maximum of 60 minutes.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });
  const isSubmitDisabled = watch('task');

  function handleSubmitNewCycle(data: NewCycleFormData) {
    console.log('denise', data);
    reset();
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitNewCycle)}>
        <FormContainer>
          <label htmlFor="task">I'm going to work on </label>
          <TaskInput
            list="task-suggestions"
            placeholder="Name your project"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Project 1"></option>
            <option value="Project 2"></option>
            <option value="Banana"></option>
            <option value="Ananas"></option>
          </datalist>

          <label htmlFor="minutesAmount"> For</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutes.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={!isSubmitDisabled}>
          <Play />
          Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}
