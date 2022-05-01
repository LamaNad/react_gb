import { FETCH_STATUSES } from "../../../utils/constants";
import { getNationalizeRequest } from "../action";
import { nationalizeReducer } from "../reducer";

describe('nationalize reducer', () => {
    it('sets error to null if called with request action', () => {
        const result = nationalizeReducer({
            data: [],
            status: FETCH_STATUSES.IDLE,
            error: 'some error',
        },
        getNationalizeRequest()
        );

        expect(result.error).toBeNull();

    });
});