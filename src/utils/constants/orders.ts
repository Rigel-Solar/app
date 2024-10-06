import { OrderTS } from "@/models/order";

const orders: OrderTS = {
	client: {
		name: "John Doe",
		email: "johndoe@example.com",
		type: "Individual",
		address: {
			street: "Main Street",
			number: "123",
			city: "Sample City",
			neighbourhood: "Central",
			zipCode: "00000-000",
		},
	},
	technician: "Jane Smith",
	type_person: "Residential",
	type_order: "Installation",
	time: "3 months",
	light_cost: 120.5,
	concessionaires: "Concessionaire 1",
	comments: "Install as soon as possible",
};

export { orders };
