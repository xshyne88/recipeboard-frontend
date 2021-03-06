export const getISONow = () => new Date(Date.now()).toISOString();

export const getUserId = user => {
    try {
        return JSON.parse(user).id;
    } catch {
        return user.id;
    }
};

export const callMutation = ({ mutation, input }) =>
    mutation({
        variables: {
            input
        }
    });

export default null;