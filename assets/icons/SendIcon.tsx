interface SendIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

function SendIcon(props: SendIconProps) {
  const {
    color,
    ...rest
  } = props;
  return (
    <svg {...rest} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SendIcon"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"></path></svg>
  );
}

export default SendIcon;