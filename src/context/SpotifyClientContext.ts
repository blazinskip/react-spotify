import React from 'react';
import { Context } from './context';

const SpotifyClientContext = React.createContext<Context>((null as unknown) as Context);

export default SpotifyClientContext;
