FROM alpine:latest AS builder

# Install dotnet sdk
#RUN wget https://dot.net/v1/dotnet-install.sh -O dotnet-install.sh
#RUN apk add --no-cache sudo icu-libs krb5-libs libgcc libintl libssl1.1 libstdc++ zlib dotnet7-sdk
RUN apk add dotnet7-sdk
#RUN sudo chmod +x ./dotnet-install.sh
#RUN ./dotnet-install.sh --channel 7.0
#ENV HOME=/root
#ENV DOTNET_ROOT=$HOME/.dotnet
#ENV PATH=$PATH:$HOME/.dotnet:$HOME/.dotnet/tools


# Build the app
RUN mkdir /home/app
COPY . /home/app
RUN dotnet publish /home/app/ -c Release -o /home/app/publish 

#===========================

FROM alpine:latest AS final
RUN apk add aspnetcore7-runtime
COPY --from=builder /home/app/publish /home/app/publish
