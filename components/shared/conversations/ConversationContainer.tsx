import React from 'react';
import { Card } from '../../ui/card';

type Props = React.PropsWithChildren<{}>;

const ConversationContainer = ({ children }: Props) => {
  return (
    // svh works on ios but vh does'nt
    <Card className="w-full h-[calc(100svh-32px)] lg:h-full p-2 flex flex-col gap-2">
      {children}
    </Card>
  );
};

export default ConversationContainer;