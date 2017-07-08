interface CrimeIncidentInterface {
    category: string;
    persistent_id: string;
    location_type: string;
    location_subtype: string;
    id: number;
    location: {
        latitude: string;
        longitude: string;
        street: {
            id: number;
            name: string;
        };
    };
    context: string;
    month: string;
    outcome_status: {
        category: string;
        date: string;
    };
}

export default CrimeIncidentInterface;
