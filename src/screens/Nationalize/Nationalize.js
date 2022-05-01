import { Box, CircularProgress } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "../../components/Form/Form";
import { MainLayout } from "../../components/Layout/MainLayout";
import { getNationalize } from "../../store/nationalize/action";
import { selectNationalize, selectNationalizeError, selectNationalizeStatus } from "../../store/nationalize/selectors";
import { FETCH_STATUSES, flagUrl, nationalizeApiUrl } from "../../utils/constants";

export const Nationalize = () => {
    const dispatch = useDispatch();
    const nationalize = useSelector(selectNationalize);
    const error = useSelector(selectNationalizeError);
    const status = useSelector(selectNationalizeStatus);

    const getNationalizeSubmit = (name) => {
        const newApiUrl = nationalizeApiUrl + name;
        dispatch(getNationalize(newApiUrl));
    };

    return (
        <MainLayout>
            <Box
                sx={{
                    p: 1,
                    mt: 4,
                    ml: 2,
                    width: 'fit-content',
                    border: '1px solid',
                    borderRadius: 2,
                    textAlign: 'center',
                    fontSize: '0.875rem',
                    fontWeight: '700',
                }}
            >
                Input your name and check your nationalize
            </Box>
            <Box sx={{ m: 2 }} >
                <Form onSubmit={getNationalizeSubmit} />
            </Box>
            {status === FETCH_STATUSES.REQUEST && <CircularProgress />}
            {error && <h4>{error}</h4>}

            <div className="nationalize_bl">
                {nationalize.country && <h4>Name: {nationalize.name}</h4>}
                {nationalize.country && nationalize.country.map((article) =>
                    <ul key={article.probability}>
                        <li>Country:
                            <img src={flagUrl + article.country_id.toLowerCase() + `.png`} alt={article.country_id} className="flag_icon" />
                            {article.country_id}
                        </li>
                        <li>Probability: {article.probability}</li>
                    </ul>)
                }
            </div>

        </MainLayout>
    );
};