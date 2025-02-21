# Variables
IMAGE_NAME = lid
IMAGE_TAG = latest
PLATFORM = linux/amd64

# Default target
.PHONY: all
all: build

# Build the Docker image for AMD64
.PHONY: build
build:
	docker build --platform $(PLATFORM) -t docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG) .

# Run the container
.PHONY: run
run:
	docker run -p 3000:3000 docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG)

# Stop all running containers
.PHONY: stop
stop:
	docker stop $$(docker ps -q --filter ancestor=docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG))

# Publish the Docker image
.PHONY: publish
publish:
	docker push docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG)

# Clean up: remove containers and images
.PHONY: clean
clean:
	docker rm $$(docker ps -a -q --filter ancestor=docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG)) 2>/dev/null || true
	docker rmi docker.yesidlopez.de/$(IMAGE_NAME):$(IMAGE_TAG) 2>/dev/null || true

# Help target
.PHONY: help
help:
	@echo "Available targets:"
	@echo "  build  - Build Docker image for AMD64"
	@echo "  run    - Run the container"
	@echo "  stop   - Stop running containers"
	@echo "  clean  - Remove containers and images"
	@echo "  help   - Show this help message" 
