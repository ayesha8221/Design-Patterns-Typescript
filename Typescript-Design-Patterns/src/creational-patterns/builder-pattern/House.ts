class House {
  private windows: number | undefined;
  private doors: number | undefined;
  private hasGarage: boolean | undefined;
  private hasSwimmingPool: boolean | undefined;

  setWindows(windows: number): void {
    this.windows = windows;
  }

  setDoors(doors: number): void {
    this.doors = doors;
  }

  setGarage(hasGarage: boolean): void {
    this.hasGarage = hasGarage;
  }

  setSwimmingPool(hasSwimmingPool: boolean): void {
    this.hasSwimmingPool = hasSwimmingPool;
  }

  describe(): string {
    return (
      `House with ${this.windows} windows, ${this.doors} doors, ` +
      `${this.hasGarage ? "a garage" : "no garage"}, ` +
      `${this.hasSwimmingPool ? "a swimming pool" : "no swimming pool"}.`
    );
  }
  build() {}
}

const house = new House();
house.setWindows(4);
house.setDoors(2);
house.setGarage(true);
house.setSwimmingPool(false);
house.build();

console.log(house.describe());
