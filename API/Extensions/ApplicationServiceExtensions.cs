using Application.Activities;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extensions
{
    public static class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationServices(this IServiceCollection services, 
        IConfiguration config)
        {
            services.AddDbContext<DataContext>(opt =>
            {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddCors(opt => {
                opt.AddPolicy("CorsPolicy", policy => {
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });
            });
            //Tells MediatR where to find our handlers
            services.AddMediatR(typeof (List.Handler).Assembly);
            //Tells AutoMapper where to find our handlers
            services.AddAutoMapper(typeof (MappingProfiles).Assembly);

            return services;
        }
    }
}