import { getNationalize, getNationalizeRequest, getNationalizeSuccess, GET_NATIONALIZE_REQUEST } from "../action";

describe('getNationalizeReq', () => {
    it('returns obj with predefined type', () => {
        const expected = {
            type: GET_NATIONALIZE_REQUEST,
        };

        const received = getNationalizeRequest();

        expect(received).toEqual(expected);
    });
});

describe('getNationalize', () => {
    it('dispatches getNationalizeReq', () => {
        const mockDispatch = jest.fn();
        fetch.mockResponse(JSON.stringify([]));

        getNationalize("")(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getNationalizeRequest());
    });

    it('dispatches getNationalizeSuc with fetch result', async () => {
        const data = [{name: "test"}];
        fetch.mockResponse(JSON.stringify(data));
        const mockDispatch = jest.fn();

        await getNationalize("")(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getNationalizeSuccess(data));
    });
});