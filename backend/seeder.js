import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cars from './data/cars.js'
import renters from './data/renters.js'
import companies from './data/companies.js'
import Renter from './models/renterModel.js'
import RentalCompany from './models/renatalCompanyModel.js'
import Admin from './models/adminModel.js'
import Car from './models/carModel.js'
import Ticket from './models/ticketModel.js'
import Rent from './models/rentModel.js'
import connectDB from './config/db.js'
dotenv.config()

connectDB()
const importData = async () => {
    try {
      await Rent.deleteMany()
      await Car.deleteMany()
      await Renter.deleteMany()
      await RentalCompany.deleteMany()
      await Admin.deleteMany()
      await Ticket.deleteMany()

      const createdCompanies = await RentalCompany.insertMany(companies)  
      const createdRenters = await Renter.insertMany(renters)  
      const createdCars = await Car.insertMany(cars)  
      console.log('Data Imported!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  const destroyData = async () => {
    try {
      await Rent.deleteMany()
      await Car.deleteMany()
      await Renter.deleteMany()
      await RentalCompany.deleteMany()
      await Admin.deleteMany()
      await Ticket.deleteMany()
  
      console.log('Data Destroyed!')
      process.exit()
    } catch (error) {
      console.error(`${error}`)
      process.exit(1)
    }
  }
  
  if (process.argv[2] === '-d') {
    destroyData()
  } else {
    importData()
  }