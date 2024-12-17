enum TypeOfDocument {
    Passport = "Паспорт",
    IDCard = "ID карты",
}

interface Owner {
    get Surname(): string;
    get Name(): string;
    get Patronymic(): string; 
    get BirthDate(): Date;
    get DocumentType(): TypeOfDocument; 
    get DocumentSeries(): string;
    get DocumentNumber(): string;
    printInfoOwner(): void;
}

class OwnerClass implements Owner {
    private surname: string;
    private name: string;
    private patronymic: string;
    private birthDate: Date;
    private documentType: TypeOfDocument;
    private documentSeries: string;
    private documentNumber: string;

    get Surname(): string {
        return this.surname;
    }
    set Surname(value: string) {
        this.surname = value;
    }
    
    get Name(): string {
        return this.name;
    }
    set Name(value: string) {
        this.name = value;
    }
    
    get Patronymic(): string {
        return this.patronymic;
    }
    set Patronymic(value: string) {
        this.patronymic = value;
    }

    get BirthDate(): Date {
        return this.birthDate;
    }
    set BirthDate(value: Date) {
        this.birthDate = value;
    }

    get DocumentType(): TypeOfDocument {
        return this.documentType;
    }
    set DocumentType(value: TypeOfDocument) {
        this.documentType = value;
    }

    get DocumentSeries(): string {
        return this.documentSeries;
    }
    set DocumentSeries(value: string) {
        this.documentSeries = value;
    }

    get DocumentNumber(): string {
        return this.documentNumber;
    }
    set DocumentNumber(value: string) {
        this.documentNumber = value;
    }
    
    constructor(
        surname: string,
        name: string,
        patronymic: string,
        birthDate: Date,
        documentType: TypeOfDocument,
        documentSeries: string,
        documentNumber: string
    ) {
        this.surname = surname;
        this.name = name;
        this.patronymic = patronymic;
        this.birthDate = birthDate;
        this.documentType = documentType;
        this.documentSeries = documentSeries;
        this.documentNumber = documentNumber;
    }

    public printInfoOwner(): void {
        console.log("Информация о владельце: " + 
        "\nФамилия: " +  this.surname+
        "\nИмя: " + this.name +
        "\nОтчество: " + this.patronymic +
        "\nДень рождения: "  + this.birthDate.toDateString() +
        "\nТип документа: "  + this.documentType +
        "\nСерия: " + this.documentSeries +
        "\nНомер: " + this.documentNumber);
    }
}

interface Vehicle {
    get Mark(): string;
    get Model(): string;
    get Year(): number;
    get Vin(): string;
    get RegistrationNumber(): string;
    get Owner(): Owner;
    printInfo(): void;
}

class VehicleImpl implements Vehicle {
    private mark: string;
    private model: string;
    private year: number;
    private vin: string;
    private registrationNumber: string;
    private owner: Owner;
    get Mark(): string {
        return this.mark;
    }
    set Mark(value: string) {
        this.mark = value;
    }
    get Model(): string{
        return this.model;
    }
    set Model(value: string) {
        this.model = value;
    }
    get Year(): number{
        return this.year;
    }
    set Year(value: number) {
        this.year = value;
    }
    get Vin(): string{
        return this.vin;
    }
    set Vin(value: string) {
        this.vin = value;
    }
    get RegistrationNumber(): string{
        return this.registrationNumber;
    }
    set RegistrationNumber(value: string) {
        this.registrationNumber = value;
    }
    get Owner(): Owner{
        return this.owner;
    }
    set Owner(value: Owner) {
        this.owner = value;
    }
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner
    ) {
        this.mark = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.owner = owner;
    }

    public printInfo(): void {
        console.log("Информация про Траснпортное средство: " + 
        " Марка: " + this.mark + 
        " Модель:  " + this.model +
        " Год: " + this.year +
        " VIN: " + this.vin +
        " Регистрационный номер:" + this.registrationNumber);
    }
}

enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    Hatchback = "Хэтчбэк"
}

enum CarClass {
    Economy = "Эконом",
    Standard = "Стандарт",
    Luxury = "Люкс"
}

interface Car extends Vehicle {
    TypeOfBody: BodyType;
    ClassOfCar: CarClass;
}

class CarImpl extends VehicleImpl implements Car {
    private typeOfBody: BodyType;
    private classOfCar: CarClass;
    get TypeOfBody(): BodyType{
        return this.typeOfBody
    }
    get ClassOfCar(): CarClass{
        return this.classOfCar;
    }
    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        bodyType: BodyType,
        carClass: CarClass
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.typeOfBody = bodyType;
        this.classOfCar = carClass;
    }

    public printInfo(): void {
        super.printInfo();
        console.log("Тип кузова: " + this.typeOfBody + 
        "\nКласс Машины: " + this.classOfCar);
    }
}

interface Motorbike extends Vehicle {
    FrameType: string;
    IsForSport: boolean;
}

class MotorbikeImpl extends VehicleImpl implements Motorbike {
    private frameType: string;
    private isForSport: boolean;

    get FrameType(): string{
        return this.frameType;
    }
    get IsForSport(): boolean{
        return this.isForSport;
    }


    constructor(
        brand: string,
        model: string,
        year: number,
        vin: string,
        registrationNumber: string,
        owner: Owner,
        frameType: string,
        isForSport: boolean
    ) {
        super(brand, model, year, vin, registrationNumber, owner);
        this.frameType = frameType;
        this.isForSport = isForSport;
    }

    public printInfo(): void {
        super.printInfo();
        console.log("Тип рамы: " + this.frameType + 
        "\nСпортивная?: " + this.isForSport);
    }
}

interface VehicleStorage<T extends Vehicle> {
    CreationDate: Date;
    Vehicles: T[];
    getAllVehicles(): T[];
}

class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private creationDate: Date;
    private vehicles: T[];
    get CreationDate(): Date{
        return this.creationDate;
    }
    get Vehicles(): T[]{
        return this.vehicles;
    }
    constructor() {
        this.creationDate = new Date();
        this.vehicles = [];
    }

    public getAllVehicles(): T[] {
        return this.vehicles;
    }

    public addVehicle(vehicle: T): void {
        this.vehicles.push(vehicle);
    }

    public getCreationDate(): Date {
        return this.creationDate;
    }
}

const owner1 = new OwnerClass("Зубенко", "Михаил", "Петрович", new Date(1987, 1, 1), TypeOfDocument.Passport, "3623", "724099");
const car1 = new CarImpl("LADA", "Granta", 2023, "QWERTYU789632", "M678OP", owner1, BodyType.Sedan, CarClass.Luxury);
const motorbike1 = new MotorbikeImpl("Chtoto", "Ktoto", 2021, "IJEBIFVB798IJEIN", "J764UR", owner1, "Sport", true);

const storage = new VehicleStorageImpl<Vehicle>();
storage.addVehicle(car1);
storage.addVehicle(motorbike1);

storage.getAllVehicles().forEach(vehicle => vehicle.printInfo());
