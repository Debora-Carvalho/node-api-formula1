import { driverRepository } from "../repositories/driver-repository";

export const driverService = {
    getDrivers: () => driverRepository.getDrivers(),

    getDriverById: (id: number) =>
        driverRepository.getDrivers().find(driver => driver.id === id)
};

