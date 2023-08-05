import { createBoard } from '@wixc3/react-board';
import { Portfolio } from '../../../components/portfolio/portfolio';

export default createBoard({
    name: 'Portfolio',
    Board: () => <Portfolio />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        canvasWidth: 1660,
    },
});
