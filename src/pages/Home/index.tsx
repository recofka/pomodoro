import { useContext } from 'react';
import { Play, HandPalm } from 'phosphor-react';
import { NewCycleForm } from './components/NewCycleForm';
import { FormProvider, useForm } from 'react-hook-form';
import { Countdown } from './components/Countdown';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';
import { HomeContainer, StartCountdownButton, StopCountdownButton } from './styles';
import { CyclesContext } from '../../context/CyclesContext';

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Insert a name for your task'),
  minutesAmount: zod
    .number()
    .min(1, 'The cycle needs to be at least 5 minutes.')
    .max(60, 'The cycle needs to be a maximum of 60 minutes.'),
});

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

export function Home() {
  const { activeCycle, interruptCurrentCycle, createNewCycle } = useContext(CyclesContext);
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  });
  const { handleSubmit, watch, reset } = newCycleForm;
  const task = watch('task');
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    createNewCycle(data);
    reset();
  }

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...newCycleForm}>
          <NewCycleForm />
        </FormProvider>
        <Countdown />

        {activeCycle ? (
          <StopCountdownButton onClick={interruptCurrentCycle} type="button">
            <HandPalm size={24} />
            Interrupt
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Start
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  );
}
