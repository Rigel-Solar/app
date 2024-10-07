export interface OrderTS {
	_id?: string;
	client: {
		name: string;
		email: string;
		type: string;
		address: {
			street: string;
			number: string;
			city: string;
			neighbourhood: string;
			zipCode: string;
		};
	};
	technician: string | null;
	type_person: string;
	type_order: string;
	time: string;
	light_cost: number;
	concessionaires: string;
	comments: string;
}
