import { ChipContainer } from './styles';

type Props = {
  label: string;
  active?: boolean;
  onClick?: () => void;
};

export const Chip = ({ label, active = false, onClick }: Props) => (
  <ChipContainer active={active} onClick={onClick}>
    {label}
  </ChipContainer>
);
