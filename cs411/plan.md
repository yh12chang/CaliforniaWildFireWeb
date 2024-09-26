        DECLARE fireCursor CURSOR for (SELECT county_id, 
                                            COUNT(fire_id) AS TotalFires, 
                                            SUM(acres_burned) AS TotalAcresBurned, 
                                            COUNT(structures_damaged) AS TotalStructuresDamaged, 
                                            COUNT(structures_destroyed) AS TotalStructuresDestroyed,
                                            COUNT(structures_evacuated) AS TotalStructuresEvacuated, 
                                            COUNT(structures_threatened) AS TotalStructuresThreatened,
                                            SUM(air_tankers) AS TotalAirTankers,
                                            SUM(dozers) AS TotalDozers, 
                                            SUM(engines) AS TotalEngines, 
                                            SUM(helicopter) AS TotalHelicopter, 
                                            SUM(water_tenders) AS TotalWaterTenders
                                            FROM fires NATURAL JOIN admin_unit_resources
                                            GROUP BY county_id);
