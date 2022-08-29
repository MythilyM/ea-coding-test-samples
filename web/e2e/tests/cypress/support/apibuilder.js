export const apiBuilder = () => {
    return {
        getFestivalsApi: () => {
            {
                cy.intercept('GET',
                '/api/v1/festivals').as('getfestivals');
                return '@getfestivals';
            }
        }
    };
};

export const api = apiBuilder();