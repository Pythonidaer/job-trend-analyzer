import { DataTypes } from 'sequelize';
import { sequelize } from '../db/database.js';

export const JobTrend = sequelize.define('JobTrend', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  demand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  growth: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true
  },
  source: {
    type: DataTypes.STRING,
    allowNull: true
  },
  dateCollected: {
    type: DataTypes.DATE,
    allowNull: true,
    defaultValue: DataTypes.NOW
  }
}, {
  timestamps: true
});
