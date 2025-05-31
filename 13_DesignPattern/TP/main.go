package main

func main() {

	shirtItem := newItem("Nike Shirt")

	observerFirst := &Customer{id: "raihan@gmail.com"}
	observerSecond := &Customer{id: "Callista@gmail.com"}

	shirtItem.register(observerFirst)
	shirtItem.register(observerSecond)

	shirtItem.updateAvailability()
}
