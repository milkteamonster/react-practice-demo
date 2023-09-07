import Item from "@/components/Item";

const CategoryItems = () => {
	const breakfastItems = [
		{
			image: "items/gelato/chocolate.jpeg",			
			title: "巧克力",
			price: 60,
		},
		{
			image: "items/gelato/blueberry.jpeg",
			title: "藍莓",
			price: 60,
		},
		{
			image: "items/gelato/caramel.jpeg",
			title: "焦糖",
			price: 60,
		},
		{
			image: "items/gelato/rose.jpeg",
			title: "玫瑰",
			price: 60,
		},
		{
			image: "items/gelato/chocomilk.jpeg",			
			title: "巧克力奶",
			price: 60,
		},
		{
			image: "items/gelato/mango.jpeg",			
			title: "芒果",
			price: 60,
		},
		{
			image: "items/gelato/coconut.jpeg",			
			title: "椰子",
			price: 60,
		},
		{
			image: "items/gelato/dragonfruit.jpeg",			
			title: "火龍果",
			price: 60,
		},
		{
			image: "items/gelato/grape.jpeg",
			title: "葡萄",
			price: 60,
		},
		{
			image: "items/gelato/matcha.jpeg",
			title: "抹茶",
			price: 60,
		},
		{
			image: "items/gelato/melon.jpeg",
			title: "香瓜",
			price: 60,
		},
		{
			image: "items/gelato/mint.jpeg",
			title: "薄荷",
			price: 60,
		},
		{
			image: "items/gelato/orange.jpeg",
			title: "香橙",
			price: 60,
		},
		{
			image: "items/gelato/oreo.jpeg",
			title: "奧利奧",
			price: 60,
		},
		{
			image: "items/gelato/pepsi.jpeg",
			title: "百事可樂",
			price: 60,
		},
		{
			image: "items/gelato/pineapple.jpeg",
			title: "鳳梨",
			price: 60,
		},
		{
			image: "items/gelato/pistachio.jpeg",
			title: "開心果",
			price: 60,
		},
		{
			image: "items/gelato/rasberry.jpeg",
			title: "桑椹",
			price: 60,
		},
		{
			image: "items/gelato/redcherry.jpeg",
			title: "紅莓",
			price: 60,
		},
		
		{
			image: "items/gelato/strawberry.jpeg",
			title: "草莓",
			price: 60,
		},
		{
			image: "items/gelato/strawberrymilk.jpeg",
			title: "草莓牛奶",
			price: 60,
		},
		{
			image: "items/gelato/taro.jpeg",
			title: "芋泥",
			price: 60,
		},
		{
			image: "items/gelato/vanilla.jpeg",
			title: "香草",
			price: 60,
		},
		{
			image: "items/gelato/cupcone.jpeg",
			title: "紙杯",
			price: 10,
		},
		{
			image: "items/gelato/coockie.jpeg",			
			title: "餅乾杯",
			price: 20,
		},
		{
			image: "items/drinks/blacktea-hot.jpeg",			
			title: "熱紅茶",
			price: 70,
		},
		{
			image: "items/drinks/milktea-ice.jpeg",			
			title: "冰奶茶",
			price: 80,
		},
		{
			image: "items/drinks/capuchino.jpeg",			
			title: "卡布奇諾",
			price: 110,
		},
		{
			image: "items/drinks/chocolate.jpeg",			
			title: "熱巧克力",
			price: 110,
		},
		{
			image: "items/drinks/coffee.jpeg",			
			title: "美式",
			price: 70,
		},
		{
			image: "items/drinks/latte-hot.jpeg",			
			title: "熱拿鐵",
			price: 110,
		},
		{
			image: "items/drinks/latte-ice.jpeg",			
			title: "冰拿鐵",
			price: 110,
		},
		{
			image: "items/drinks/coke.jpeg",			
			title: "可樂",
			price: 50,
		},
	];

	return (
		 <div className="grid grid-cols-4 mb-36">
			{breakfastItems.map((item, index) => (
				<Item data={item} key={`${item.title}-${index}`} />
			))}
		</div>
	);
};

export default CategoryItems;
