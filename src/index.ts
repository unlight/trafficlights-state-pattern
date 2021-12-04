export class TrafficLights {
    private state: TrafficLightsState = new Yellow();

    next() {
        this.state = this.state.next();
    }

    shouldStop() {
        return this.state.shouldStop();
    }
}

interface TrafficLightsState {
    next(): TrafficLightsState;
    shouldStop(): boolean;
}

class Red implements TrafficLightsState {
    next() {
        return new Green();
    }

    shouldStop() {
        return true;
    }
}

class Yellow implements TrafficLightsState {
    next() {
        return new Red();
    }

    shouldStop() {
        return true;
    }
}

class Green implements TrafficLightsState {
    next() {
        return new Yellow();
    }

    shouldStop() {
        return false;
    }
}

// class BlinkingYellow implements TrafficLightsState {
//     next(): TrafficLightsState {
//         return new Yellow();
//     }

//     shouldStop(): boolean {
//         return false;
//     }
// }
