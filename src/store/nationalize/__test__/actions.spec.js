import { getNationalizeRequest, GET_NATIONALIZE_REQUEST } from "../action";

describe('getNationalizeReq', () => {
    it('return obj with predefined type', () => {
        const expected = {
            type: GET_NATIONALIZE_REQUEST,
        };

        const received = getNationalizeRequest();

        expect(received).toEqual(expected);
    });
});